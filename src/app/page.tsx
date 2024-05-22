import ContactGrid from "./components/ContactGrid";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold text-black-600 mb-6">IronHack Contacts</h1>
			<ContactGrid />
		</main>
	);
}
