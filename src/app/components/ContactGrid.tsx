"use client";

import React, { useState, useCallback } from "react";
import contacts from "../contacts.json";
import ContactCard from "./ContactCard";

const ContactGrid: React.FC = () => {
	const initialContacts = contacts.slice(0, 5);
	const remainingContacts = contacts.slice(5);

	const [contactsList, setContactsList] = useState(initialContacts);
	const [remaining, setRemaining] = useState(remainingContacts);

	const addRandomContact = useCallback(() => {
		if (remaining.length === 0) return;

		const randomIndex = Math.floor(Math.random() * remaining.length);
		const randomContact = remaining[randomIndex];

		setContactsList(prevContacts => [...prevContacts, randomContact]);
		setRemaining(prevRemaining =>
			prevRemaining.filter((_, index) => index !== randomIndex)
		);
	}, [remaining]);

	const sortByName = useCallback(() => {
		setContactsList(prevContacts =>
			[...prevContacts].sort((a, b) => a.name.localeCompare(b.name))
		);
	}, []);

	const sortByPopularity = useCallback(() => {
		setContactsList(prevContacts =>
			[...prevContacts].sort((a, b) => b.popularity - a.popularity)
		);
	}, []);

	const handleDelete = useCallback((id: string) => {
		setContactsList(prevContacts => prevContacts.filter(contact => contact.id !== id));
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-center mb-4 space-x-4">
				<button
					onClick={addRandomContact}
					className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
					Add Random Contact
				</button>
				<button
					onClick={sortByName}
					className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
					Sort by Name
				</button>
				<button
					onClick={sortByPopularity}
					className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
					Sort by Popularity
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{contactsList.map(contact => (
					<div key={contact.id} className="relative">
						<ContactCard
							name={contact.name}
							pictureUrl={contact.pictureUrl}
							popularity={contact.popularity}
							wonOscar={contact.wonOscar}
							wonEmmy={contact.wonEmmy}
						/>
						<button
							onClick={() => handleDelete(contact.id)}
							className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600">
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContactGrid;
