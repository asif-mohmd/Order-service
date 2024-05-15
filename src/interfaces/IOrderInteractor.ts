import { CourseDetails } from "../entities/orderEntities";

export interface IOrderInteractor {
    makePayment(courseDetails:CourseDetails):any
  
}