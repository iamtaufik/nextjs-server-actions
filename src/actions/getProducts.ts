'use server';
import { Product } from '@prisma/client';
import prisma from '../../libs/prisma';

export const getProducts = async () => {
  try {
    const products: Product[] = await prisma.product.findMany();

    return products;
  } catch (error) {
    console.log(error);
  }
};
