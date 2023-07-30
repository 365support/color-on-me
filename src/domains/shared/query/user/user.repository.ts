import client from "../../api/client";

class UserRepository {
  async postUser(data: string) {
    return client.post("users", {
      personalColor: data,
    });
  }
}

export default new UserRepository();
