# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lighter image to run the app
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV production

# Set the working directory
WORKDIR /app

# Copy the build from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port that Next.js runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
