class User {
    #password;
    constructor(email, password) {
      this.email = email;
      this.#password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    resetPassword(newPassword) {
      this.#password = newPassword;
    }
  
    logout() {
      console.log('Logout Successfully');
    }
  }
  
  class Author extends User {
    #numOfPost;
  
    constructor(email, password) {
      super(email, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      // add content to your DB. :)
      this.#numOfPost++;
    }
  
    getNumOfPost() {
      return this.#numOfPost;
    }
  }
  
  class Admin extends User {
    constructor(email, password) {
      super(email, password);
    }
  
    removeUser(userId) {
      // remove this userId from your DB.
      console.log('User Removed successfully.');
    }
  }
  
  const nehal = new Author('nm@gmail.com', 'password:)');
  nehal.login('nm@gmail.com', 'password:)');
  nehal.createPost('I hope you are enjoying this article. Don\'t forget to leave your feedback. :)');
  nehal.createPost('I am tired, Do you wanna buy me a coffee? :)');
  console.log(nehal.getNumOfPost()); // 2
  
  const json = new Admin('jason@gmail.com', '[Object] [object]');
  json.login('jason@gmail.com', '[Object] [object]');
  json.resetPassword('{id: 1}');
  json.login('jason@gmail.com', '{id: 1}');
  json.removeUser(12)