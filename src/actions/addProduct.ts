'use server';
import { revalidatePath } from 'next/cache';
import prisma from '../../libs/prisma';

export const addProduct = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const price = formData.get('price');
  const quantity = formData.get('quantity');

  try {
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: Number(price),
        quantity: Number(quantity),
      },
    });

    revalidatePath('/');
  } catch (error: any) {
    console.log(error);
  }
};
