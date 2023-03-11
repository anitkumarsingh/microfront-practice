import faker from 'faker';

const carts = `<div> You have ${faker.random.number()} items in your cart</div>`;
// document.querySelector('#dev-cart').innerHTML =carts;
const mount = (el) => {
	el.innerHTML = carts;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-cart');
	if (el) {
		mount(el);
	}
}

export { mount };
