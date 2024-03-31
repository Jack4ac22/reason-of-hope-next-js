import Property from "@/models/Property";
import connectDb from "@/config/database";
import { getSessionUser } from "@/util/get-session-user";

// GET /api/properties/:id
// return property by id

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response({ message: "Property not found" }, { status: 404 });
    }

    // console.log(properties)
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};

// DELETE /api/properties/:id
// delete property by id

export const DELETE = async (request, { params }) => {
  try {
    const propertyID = params.id;
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response(
        { message: "Unauthorized action, User ID is required" },
        { status: 401 }
      );
    }
    const { userId } = sessionUser;
    await connectDb();
    const property = await Property.findById(propertyID);
    if (!property) {
      return new Response({ message: "Property not found" }, { status: 404 });
    }
    // verify ownership
    if (property.owner.toString() !== userId) {
      return new Response(
        { message: "Unauthorized action, User ID is required" },
        { status: 401 }
      );
    }
    await property.deleteOne();
    // handle the images deletion from cloudinary
    try {
      const images = property.images;
      if (images.length > 0) {
        const publicIds = images.map((img) => img.publicId);
        await cloudinary.api.delete_resources(publicIds);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(properties)
    return new Response({ message: "Property Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};

// PUT /api/properties/:id
// update property by id

export const PUT = async (request, { params }) => {
  try {
    // 1- connect to the database
    await connectDb();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized - user id is required.", {
        status: 401,
      });
    }
    const id = params.id;
    const userId = sessionUser.userId;
    // console.log(userId);

    const formData = await request.formData();

    // access all values from ammineties and images
    const amenities = formData.getAll("amenities");

    // get the property to update
    const currentProperty = await Property.findById(id);

    if (!currentProperty) {
      return new Response("Property not found", { status: 404 });
    }

    // check ownership
    if (currentProperty.owner.toString() !== userId) {
      return new Response("Unauthorized action.", {
        status: 401,
      });
    }

    // create a new property
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities: amenities,
      rates: {
        monthly: formData.get("rates.monthly"),
        weekly: formData.get("rates.weekly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    // update the property
    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);
    
    return new Response(JSON.stringify(updatedProperty), {
      status: 200, 
    });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong, Faild to add property", {
      status: 500,
    });
  }
};
