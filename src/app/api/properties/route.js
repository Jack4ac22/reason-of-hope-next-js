import Property from "@/models/Property";
import connectDb from "@/config/database";
import { getSessionUser } from "@/util/get-session-user";

// GET /api/properties
// return all properties
export const GET = async () => {
  try {
    await connectDb();
    const properties = await Property.find({});
    // console.log(properties)
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    // 1- connect to the database
    await connectDb();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized - user id is required.", {
        status: 401,
      });
    }
    const userId = sessionUser.userId;
    // console.log(userId);

    const formData = await request.formData();

    // access all values from ammineties and images
    const amenities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

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
      images: images.map((image) => image.name),
    };

    // create a new property
    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );
    // return new Response(JSON.stringify({ Message: "success" }), {
    //   status: 201,
    // });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong, Faild to add property", {
      status: 500,
    });
  }
};
