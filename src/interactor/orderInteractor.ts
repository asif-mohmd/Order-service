import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { CourseDetails } from "../entities/orderEntities";
import { IOrderRepository } from "../interfaces/IOrderRepository";

export class OrderInteractor implements OrderInteractor {
  private repository: IOrderRepository;

  constructor(repository: IOrderRepository) {
    this.repository = repository;
  }

  async makePayment(courseDetails: CourseDetails): Promise<boolean | any> {
    try {

      console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_SITE_URL}/payment/success`,
        cancel_url: "http://localhost:5173/instructor",
        client_reference_id: courseDetails._id,
        line_items: [
          {
            price_data: {
              currency: "inr",
              // Convert the string to 'unknown' first, then to 'number'
              unit_amount: (Number(courseDetails.coursePrice) as number) * 100,
              product_data:{
                name:courseDetails.courseName,
                description:courseDetails.courseDescription,
                images:[courseDetails.thumbnail]
              }
            },
            quantity:1
          },
        ],
      });

      console.log(session,"sessionsss")

      return session



    } catch (error) {
      console.log("order intra errrr:",error)
      return error
    }
  }
}
