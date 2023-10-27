import { addProduct } from '@/actions/addProduct';
import { getProducts } from '@/actions/getProducts';

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="">
      <div className="flex justify-center">
        <div className="w-60 mt-6">
          <form action={addProduct} className="flex gap-4 flex-col">
            <input type="text" name="name" placeholder="Name" className="border-2 border-gray-400 p-2 rounded-md" />
            <input type="text" name="description" placeholder="Description" className="border-2 border-gray-400 p-2 rounded-md" />
            <input type="text" name="price" placeholder="Price" className="border-2 border-gray-400 p-2 rounded-md" />
            <input type="text" name="quantity" placeholder="Quantity" className="border-2 border-gray-400 p-2 rounded-md" />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
      <div className="flex gap-4">
        {products &&
          products.map((product) => {
            return (
              <div className="border-2 border-gray-400 p-2 rounded-md w-max">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
