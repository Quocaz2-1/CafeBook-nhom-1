/**
 * 🍵 CAFE BOOKING - MAIN APPLICATION (app.js)
 * Copy of main-root.js to provide a stable script path `js/app.js`.
 * This avoids filesystem name collisions with folders named `main.js`.
 */

// Full implementation copied from main-root.js
const API_TABLE = "https://69f9a6d9c509a40d3aa2efdc.mockapi.io/api/v1/tables";
const API_RES = "https://69f9a6d9c509a40d3aa2efdc.mockapi.io/api/v1/reservations";

const staticDrinks = [
	{ id: "cheesecake-cafe", name: "Cheesecake Cà Phê", price: 45000, category: "Đặc sắc", image: "img/cheesecake-cafe.png" },
	{ id: "cupcake-cafe", name: "Cup Cake Cà Phê", price: 42000, category: "Đặc sắc", image: "img/cup-cake-cafe.png" },
	{ id: "cafe-cam", name: "Cà Phê Cam", price: 47000, category: "Đặc sắc", image: "img/cafe-cam.png" },
	{ id: "cafe-mocha", name: "Cà Phê Mocha", price: 49000, category: "Đặc sắc", image: "img/cafe-mocha.png" },
	{ id: "cafe-tiramisu", name: "Cà Phê Tiramisu", price: 52000, category: "Đặc sắc", image: "img/cafe-tiramisu.png" },
	{ id: "pudding-cafe", name: "Pudding Cà Phê", price: 38000, category: "Đặc sắc", image: "img/pudding-cafe.png" },
	{ id: "rau-cau-cafe", name: "Rau Câu Cà Phê", price: 36000, category: "Đặc sắc", image: "img/rau-cau-cafe.png" },
	{ id: "sua-lac-cafe", name: "Sữa Lắc Cà Phê", price: 43000, category: "Đặc sắc", image: "img/sua-lac-cafe.png" },
	{ id: "tra-sua-cafe", name: "Trà Sữa Cà Phê", price: 41000, category: "Đặc sắc", image: "img/tra-sua-cafe.png" },
	{ id: "tao-pho-cafe", name: "Tào Phớ Cà Phê", price: 44000, category: "Đặc sắc", image: "img/tao-pho-cafe.png" },
	{ id: "affogato", name: "Affogato", price: 57000, category: "Cà phê đặc sắc", image: "img/affogato.jpg" },
	{ id: "americano", name: "Americano", price: 32000, category: "Cà phê", image: "img/americano.jpg" },
	{ id: "cacao-da", name: "Cacao Đá", price: 39000, category: "Đặc sắc", image: "img/cacao-da.jpg" },
	{ id: "chocolate-nong", name: "Chocolate Nóng", price: 42000, category: "Đặc sắc", image: "img/chocolate-nong.jpg" },
	{ id: "cold-brew", name: "Cold Brew", price: 52000, category: "Cà phê đặc sắc", image: "img/cold-brew.jpg" },
	{ id: "cookies-cream-da-xay", name: "Cookies & Cream Đá Xay", price: 56000, category: "Đá xay", image: "img/cookies-cream-da-xay.jpg" },
	{ id: "ca-phe-muoi", name: "Cà Phê Muối", price: 55000, category: "Đặc sắc", image: "img/cafe-muoi.jpg" },
	{ id: "ca-phe-sua-da", name: "Cà Phê Sữa Đá", price: 34000, category: "Truyền Thống", image: "img/cafe-sua-da.jpg" },
	{ id: "ca-phe-trung", name: "Cà Phê Trứng", price: 60000, category: "Đặc sắc", image: "img/cafe-trung.jpg" },
	{ id: "ca-phe-den", name: "Cà Phê Đen", price: 30000, category: "Truyền Thống", image: "img/cafe-den.jpg" },
	{ id: "espresso", name: "Espresso", price: 28000, category: "Cà phê", image: "img/espresso.jpg" },
	{ id: "macchiato", name: "Macchiato", price: 49000, category: "Đặc sắc", image: "img/macchiato.jpg" },
	{ id: "matcha-latte", name: "Matcha Latte", price: 52000, category: "Trà", image: "img/matcha-latte.jpg" },
	{ id: "mocha", name: "Mocha", price: 50000, category: "Cà phê", image: "img/mocha.jpg" },
	{ id: "mojito-chanh", name: "Mojito Chanh", price: 42000, category: "Nước giải khát", image: "img/mojito-chanh.jpg" },
	{ id: "oreo-da-xay", name: "Oreo Đá Xay", price: 56000, category: "Đá xay", image: "img/oreo-da-xay.jpg" },
	{ id: "sinh-to-bo", name: "Sinh Tố Bơ", price: 52000, category: "Sinh tố", image: "img/sinh-to-bo.jpg" },
	{ id: "sinh-to-xoai", name: "Sinh Tố Xoài", price: 52000, category: "Sinh tố", image: "img/sinh-to-xoai.jpg" },
	{ id: "cappuccino", name: "Cappuccino", price: 48000, category: "Cà phê", image: "img/cappuccino.jpg" },
	{ id: "ca-phe", name: "Cà Phê", price: 30000, category: "Truyền Thống", image: "img/cafe.jpg" },
	{ id: "soda-viet-quat", name: "Soda Việt Quất", price: 39000, category: "Nước giải khát", image: "img/soda-viet-quat.jpg" },
	{ id: "tra-chanh", name: "Trà Chanh", price: 32000, category: "Trà", image: "img/tra-chanh.jpg" },
	{ id: "tra-sua-tran-chau", name: "Trà Sữa Trân Châu", price: 50000, category: "Trà", image: "img/tra-sua-tran-chau.jpg" },
	{ id: "tra-vai", name: "Trà Vải", price: 43000, category: "Trà", image: "img/tra-vai.jpg" },
	{ id: "tra-dao-cam-sa", name: "Trà Đào Cam Sả", price: 45000, category: "Trà", image: "img/tra-dao-cam-sa.jpg" },
	{ id: "bac-siu", name: "Bạc Xỉu", price: 35000, category: "Truyền Thống", image: "img/bac-xiu.jpg" },
	{ id: "nuoc-ep", name: "Nước Ép", price: 40000, category: "Nước Ép", image: "img/nuoc-ep.jpg" }
];

let cart = [];
let selectedTable = null;
let drinks = [];
let currentFilter = "all";
let currentSearch = "";
let apiAvailable = false;

function getCustomerSession() {
	const sessionData = localStorage.getItem("customerSession");
	if (!sessionData) return null;
	try {
		return JSON.parse(sessionData);
	} catch (error) {
		return null;
	}
}

function isCustomerLoggedIn() {
	return Boolean(getCustomerSession());
}

function logoutCustomer() {
	localStorage.removeItem("customerSession");
	window.location.href = "login.html";
}

function updateAuthUI() {
	const authMessage = document.getElementById("authMessage");
	if (!authMessage) return;

	const session = getCustomerSession();
	const navAuthAction = document.getElementById("navAuthAction");
	if (session) {
		authMessage.innerHTML = `
			<strong>Xin chào, ${escapeHtml(session.name)}</strong>.<br>
			Bạn đã đăng nhập và có thể đặt món ngay.`;
		if (navAuthAction) {
			navAuthAction.innerHTML = `<button type="button" onclick="logoutCustomer()" class="auth-logout">Đăng xuất</button>`;
		}
	} else {
		authMessage.innerHTML = `
			<strong>Vui lòng đăng nhập / đăng ký trước khi đặt món.</strong><br>
			<a href="login.html" class="auth-login-link">Đăng nhập ngay</a>`;
		if (navAuthAction) {
			navAuthAction.innerHTML = "";
		}
	}
}

function fillCustomerInfoFromSession() {
	const session = getCustomerSession();
	if (!session) return;

	const nameInput = document.getElementById("name");
	const phoneInput = document.getElementById("phone");
	const addressInput = document.getElementById("address");

	if (nameInput && session.name) nameInput.value = session.name;
	if (phoneInput && session.phone) phoneInput.value = session.phone;
	if (addressInput && session.address) addressInput.value = session.address;
}

function handleAddToCart(id, name, price) {
	if (!isCustomerLoggedIn()) {
		if (confirm("Bạn cần đăng nhập trước khi đặt món. Chuyển tới trang đăng nhập?")) {
			window.location.href = "login.html";
		}
		return;
	}
	addToCart(id, name, price);
}

function escapeHtml(text) {
	const map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};
	return String(text).replace(/[&<>"']/g, m => map[m]);
}

function saveCart() {
	localStorage.setItem('cafe_cart', JSON.stringify(cart));
}

function loadCart() {
	try {
		const saved = JSON.parse(localStorage.getItem('cafe_cart') || '[]');
		if (Array.isArray(saved)) {
			cart = saved;
		}
	} catch (error) {
		cart = [];
	}
}

function addToCart(id, name, price) {
	const existing = cart.find(item => item.id === id);
	if (existing) {
		existing.qty += 1;
	} else {
		cart.push({ id, name, price, qty: 1 });
	}
	saveCart();
	updateCartUI();
}

function removeFromCart(id) {
	cart = cart.filter(item => item.id !== id);
	saveCart();
	updateCartUI();
}

function populateTableSelect() {
	const tableSelect = document.getElementById('tableSelect');
	if (!tableSelect) return;
	const options = [
		{ value: '', text: '📍 Chọn bàn...' },
		...Array.from({ length: 20 }, (_, i) => ({ value: String(i + 1), text: `Bàn ${i + 1}` }))
	];
	tableSelect.innerHTML = options.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join('');
}

function getFilteredDrinks() {
	const searchValue = document.getElementById('search')?.value.toLowerCase().trim() || '';
	const filterValue = document.getElementById('filter')?.value || 'all';
	return staticDrinks.filter(drink => {
		const matchesSearch = drink.name.toLowerCase().includes(searchValue) || drink.category.toLowerCase().includes(searchValue);
		const matchesFilter = filterValue === 'all' || drink.category === filterValue;
		return matchesSearch && matchesFilter;
	});
}

function populateFilterOptions() {
	const filter = document.getElementById('filter');
	if (!filter) return;
	const categories = ['all', ...new Set(staticDrinks.map(drink => drink.category))];
	filter.innerHTML = categories.map(category => {
		return `<option value="${category}">${category === 'all' ? 'Tất cả' : category}</option>`;
	}).join('');
}

function syncCategorySelection() {
	const filterValue = document.getElementById('filter')?.value || 'all';
	document.querySelectorAll('.category-item').forEach(item => {
		item.classList.toggle('active', item.dataset.category === filterValue);
	});
}

function initCategoryFilter() {
	document.querySelectorAll('.category-item').forEach(item => {
		item.addEventListener('click', () => {
			const selectedCategory = item.dataset.category || 'all';
			document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
			item.classList.add('active');
			const filter = document.getElementById('filter');
			if (filter) filter.value = selectedCategory;
			renderMenu();
		});
	});
}

function renderMenu() {
	syncCategorySelection();
	const menu = document.getElementById('menu');
	if (!menu) return;
	const drinks = getFilteredDrinks();
	if (drinks.length === 0) {
		menu.innerHTML = '<div class="col text-center py-5"><div class="loading -spinner"><i class="fas fa-spinner fa-spin"></i></div><p class="text-muted" style="margin-top: 12px;">Không tìm thấy đồ uống phù hợp.</p></div>';
		return;
	}
	menu.innerHTML = drinks.map(drink => `
		<div class="col">
			<div class="drink-card">
				<img src="${escapeHtml(drink.image)}" alt="${escapeHtml(drink.name)}" class="drink-image" onerror="this.src='img/cafe.jpg'">
				<div class="drink-name">${escapeHtml(drink.name)}</div>
				<div class="drink-price">${drink.price.toLocaleString('vi-VN')}₫</div>
				<button type="button" class="btn btn-sm btn-primary mt-2" onclick="addToCart('${drink.id}', '${escapeHtml(drink.name)}', ${drink.price})">Thêm vào giỏ</button>
			</div>
		</div>
	`).join('');
}

function updateCartUI() {
	const cartEl = document.getElementById('cart');
	const cartTotalEl = document.getElementById('cartTotal');
	if (!cartEl || !cartTotalEl) return;
	if (cart.length === 0) {
		cartEl.innerHTML = '<li class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Giỏ hàng trống</p></li>';
		cartTotalEl.innerHTML = '';
		return;
	}
	const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
	cartEl.innerHTML = cart.map(item => `
		<li class="d-flex justify-content-between align-items-center mb-2">
			<div>
				<strong>${escapeHtml(item.name)}</strong> x${item.qty}
				<small class="d-block">${(item.price * item.qty).toLocaleString('vi-VN')}₫</small>
			</div>
			<button type="button" class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}')">Xóa</button>
		</li>
	`).join('');
	cartTotalEl.innerHTML = `<div class="cart-total-text"><strong>Tổng:</strong> ${total.toLocaleString('vi-VN')}₫</div>`;
}

function initSearchAndFilter() {
	document.getElementById('search')?.addEventListener('input', renderMenu);
	document.getElementById('filter')?.addEventListener('change', renderMenu);
}

function initForm() {
	const form = document.getElementById('form');
	if (!form) return;
	form.addEventListener('submit', event => {
		event.preventDefault();
		const name = document.getElementById('name')?.value.trim();
		const phone = document.getElementById('phone')?.value.trim();
		const address = document.getElementById('address')?.value.trim();
		if (!name || !phone || !address) {
			alert('Vui lòng điền đầy đủ thông tin khách hàng.');
			return;
		}
		if (cart.length === 0) {
			alert('Vui lòng chọn ít nhất một đồ uống.');
			return;
		}
		const order = {
			id: 'local_' + Date.now(),
			name,
			phone,
			address,
			items: cart.map(item => ({ name: item.name, price: item.price, qty: item.qty })),
			status: 'pending'
		};
		const orders = JSON.parse(localStorage.getItem('customer_orders') || '[]');
		orders.push(order);
		localStorage.setItem('customer_orders', JSON.stringify(orders));
		cart = [];
		saveCart();
		updateCartUI();
		form.reset();
		alert('Đặt hàng thành công!');
	});
}

function initApp() {
	loadCart();
	updateAuthUI();
	fillCustomerInfoFromSession();
	populateTableSelect();
	populateFilterOptions();
	initCategoryFilter();
	renderMenu();
	updateCartUI();
	initSearchAndFilter();
	initForm();
}

window.addEventListener('DOMContentLoaded', initApp);

// Initialization and the rest of the file continue identical to main-root.js

document.querySelectorAll(
'.category-btn,.btn-add,.btn-checkout'
).forEach(btn=>{

btn.addEventListener('click',function(e){

const circle =
document.createElement('span');

const size =
Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+'px';
circle.style.height=size+'px';

circle.style.position='absolute';
circle.style.borderRadius='50%';

circle.style.background=
'rgba(255,255,255,.5)';

circle.style.left=
e.offsetX-size/2+'px';

circle.style.top=
e.offsetY-size/2+'px';

circle.style.transform='scale(0)';
circle.style.animation=
'ripple .6s linear';

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});
