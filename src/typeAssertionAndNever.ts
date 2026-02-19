//type assertion
let response: any = '22';

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Atomic habits"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// const inputElm = document.getElementById('username') as HTMLInputElement;

const data: unknown = 'pranto';
const strData: string = data as string;

type Role = 'admin' | 'user';

function redirectBasedOnRole(role: Role): void {
  if (role === 'admin') {
    console.log('redirecting to admin dashboard');
    return;
  }
  if (role === 'user') {
    console.log('redirecting to user dashboard');
    return;
  }
  role; //type->never
}

function neverReturn(): never {
  while (true) {
    // never return
  }
}
