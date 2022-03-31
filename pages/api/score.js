import initDB from "../../helpers/db"
import mongoose from "mongoose";
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import scoresc from "../../models/Score"
var Indiv =require("../../models/Individual")


initDB();

export default async function handler(req, res) {
  if (req.method === "POST") {

    const { result , individualMail } = req.body;

    if ( !result && !individualMail) {
      return sendError(res, "All values not found", 2, 404);
    }

    var scoreData={
    result : { $eq : req.body.result},
    mail : {$eq: req.body.individualMail}
    }

    const individual = await Indiv.find({ email :  scoreData.mail });
    const prevScore = await scoresc.findOneAndUpdate({email:scoreData.mail },{ result  });
    console.log(prevScore,"prevScore")
    // const doc = await scoresc.findOneAndUpdate({result : result })

      const item = new scoresc({
      result : result,
      individualId : individual[0]._id,
      email : individualMail,
      });

      console.log(item);
      await item.save();
      //  console.log(item);
      // mongoose.connection.close();
      return sendSuccess(res, item);
 
}

  else {
    return sendError(res, "Bad request", 2, 400);
  }
}

