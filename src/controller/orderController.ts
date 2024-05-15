import { IOrderInteractor } from "../interfaces/IOrderInteractor";

export class OrderController {
  private interactor: IOrderInteractor;

  constructor(interactor: IOrderInteractor) {
    this.interactor = interactor;
  }

  onMakePayment = async (data: any) => {
    try {
        console.log("-----========------------",data)

      const courseDetails = data.courseData
    //   const userDetails = data.userDetails
      console.log(courseDetails,"-======-")
      return await this.interactor.makePayment(data)
    } catch (err) {}
  };
}
