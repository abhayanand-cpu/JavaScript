// Encapsulation is defined as binding the data and methods into a single unit to protect it from outside access. Just like a pill contains medication inside of its coating.

// In the context of class, some properties are not directly accessed from outside of the class. You need to call the responsible method for the properties.
// Abstraction is one step ahead of encapsulation. Abstraction is defined as showing only the essential things and hiding the inner implementation.


class User {
    name;
    email;
    #password;
    constructor() {}
  
    #validateEmail(email) {
      // check email is valid or not.
      return true;
    }
  
    #validatePassword(password) {
      // check password is satisfying the minimum requirements or not.https://codeshare.io/nan32
      return true;
    }
  
    signUp(name, email, password) {
      let isValidated = false;
      isValidated = this.#validateEmail(email);
      isValidated &&= this.#validatePassword(password);
  
      if (isValidated) {
        this.name = name;
        this.email = email;
        this.#password = password;
        // add user in your db.
        console.log('User registered successfuly');
      } else {
        console.log('Please enter correct Details!!');
      }
    }
  
    login(email, password) {
      if (email === this.email && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    #isRegisteredUser(email) {
      // check user is registered or not.
      return true;
    }
  
    resetPassword(email, newPassword) {
      if (this.#isRegisteredUser(email)) {
          this.#password = newPassword;
          console.log('Operation performed successfully');
      }
      else {
        console.log('No account found!');
      }
    }
  };
  
  const nehal = new User();
  nehal.signUp('Nehal Mahida', 'nm@gmail.com', 'password:)'); // User registered successfuly
  
//   nehal.#validateEmail('nm@gmail.com'); // Syntax Error.
  
  nehal.login('nm@gmail.com', 'password:)'); // Login Successfully
  nehal.resetPassword('nm@gmail.com', ''); // Operation performed successfully
  