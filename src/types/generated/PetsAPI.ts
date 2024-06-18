export namespace PetsAPI {
  export interface Order {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /**
     * Order Status
     */
    status?: 'placed' | 'approved' | 'delivered';
    complete?: boolean;
  }
  export interface Customer {
    id?: number;
    username?: string;
    address?: PetsAPI.Address[];
  }
  export interface Address {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  }
  export interface Category {
    id?: number;
    name?: string;
  }
  export interface User {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /**
     * User Status
     */
    userStatus?: number;
  }
  export interface Tag {
    id?: number;
    name?: string;
  }
  export interface Pet {
    id?: number;
    name: string;
    category?: PetsAPI.Category;
    photoUrls: string[];
    tags?: PetsAPI.Tag[];
    /**
     * pet status in the store
     */
    status?: 'available' | 'pending' | 'sold';
  }
  export interface ApiResponse {
    code?: number;
    type?: string;
    message?: string;
  }
}

export interface PetsAPI {
  version: '1';
  routes: {
    '/pet': {
      POST: {
        body: FormData;
        response: PetsAPI.Pet;
      };
      PUT: {
        body: FormData;
        response: PetsAPI.Pet;
      };
    };
    '/pet/findByStatus': {
      GET: {
        query?: {
          status?: 'available' | 'pending' | 'sold';
        };
        response: PetsAPI.Pet[];
      };
    };
    '/pet/findByTags': {
      GET: {
        query?: {
          tags?: string[];
        };
        response: PetsAPI.Pet[];
      };
    };
    '/pet/{petId}': {
      GET: {
        params: {
          petId: number;
        };
        response: PetsAPI.Pet;
      };
      POST: {
        params: {
          petId: number;
        };
        query?: {
          name?: string;
          status?: string;
        };
      };
      DELETE: {
        params: {
          petId: number;
        };
      };
    };
    '/store/inventory': {
      GET: {
        response: {
          [k: string]: number;
        };
      };
    };
    '/store/order': {
      POST: {
        body?: FormData;
        response: PetsAPI.Order;
      };
    };
    '/store/order/{orderId}': {
      GET: {
        params: {
          orderId: number;
        };
        response: PetsAPI.Order;
      };
      DELETE: {
        params: {
          orderId: number;
        };
      };
    };
    '/user': {
      POST: {
        body?: FormData;
      };
    };
    '/user/createWithList': {
      POST: {
        body?: PetsAPI.User[];
        response: PetsAPI.User;
      };
    };
    '/user/login': {
      GET: {
        query?: {
          username?: string;
          password?: string;
        };
        response: string;
      };
    };
    '/user/logout': {
      GET: {};
    };
    '/user/{username}': {
      GET: {
        params: {
          username: string;
        };
        response: PetsAPI.User;
      };
      PUT: {
        body?: FormData;
        params: {
          username: string;
        };
      };
      DELETE: {
        params: {
          username: string;
        };
      };
    };
  };
}
