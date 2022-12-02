import {model,Schema} from "mongoose"

const PurchaseSchema = new Schema (
    {
        shippingAdress: String,
        album: [{
            type:Schema.Types.ObjectId,
            ref:"Album"
        }]
    }
)

const PurchaseModel = model("Purchase", PurchaseSchema)

export default PurchaseModel