import { getProductDetails } from "@/src/app/_services/api";
import Details from "./Details";

export default async function DetailsWrapper({ id }: { id: number }) {
    const product = await getProductDetails(id);

    return <Details product={product} />
}