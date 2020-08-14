const { RESTDataSource } = require("apollo-datasource-rest");

class HelloDataSource extends RESTDataSource {
  async fails(input) {
    return await this.put("http://fakeapi/", input);
  }

  async succeeds(input) {
    return await this.put("http://fakeapi/", input);
  }

}

module.exports = {HelloDataSource} ;
