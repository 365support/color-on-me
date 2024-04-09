import client from '../../api/client';

type GetProducts = {
  page: number;
  productId?: number;
  keyword?: string;
  personalColor?: string;
  category?: string;
  sort?: string;
};

class ProductRepository {
  async getProducts({ page, productId, keyword, personalColor, category, sort }: GetProducts) {
    return client.get(
      `products?page=${page}${page === 1 || !productId ? '' : `&lastcursor=${productId}`}${
        keyword ? `&keyword=${keyword}` : ''
      }${personalColor ? `&personalcolor=${personalColor}` : ''}${category ? `&category=${category}` : ''}${
        sort ? `&sort=${sort}` : ''
      }`,
    );
  }

  async getProduct(productId: number) {
    return client.get(`products/${productId}`);
  }

  async postProductOGInfo(url: string) {
    return client.post(`products/address`, {
      sellUrl: url,
    });
  }

  async postProduct({
    name,
    color,
    platform,
    sellUrl,
    imageUrl,
    personalColor,
    category,
  }: {
    name: string;
    color: string[];
    platform: string[];
    sellUrl: string;
    imageUrl: string;
    personalColor: number;
    category: string;
  }) {
    return client.post(`products`, {
      name,
      color,
      platform,
      sellUrl,
      imageUrl,
      personalColor,
      category,
    });
  }

  async postProductLike(id: number) {
    return client.post(`product/${id}`);
  }
}

export default new ProductRepository();
