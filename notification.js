// Function
function showNotification() {
	const notification = new Notification ("คุณมีข้อความใหม่",{
		body: "ยินดีที่ได้รู้จัก"
	});
	notification.onclick = (e) => {
		window.location.href = "https://google.com"
	}
}
// Permission & Call function
console.log(Notification.permission);
if (Notification.permission === "granted") {
	showNotification();
} else if (Notification.permission !== "denied") {
	Notification.requestPermission().then(permission => {
		console.log(permission);
		if (permission === "granted") {
			showNotification();
		}
	});
}