import Image from "next/image";
import React from "react";

interface ContactCardProps {
	name: string;
	pictureUrl: string;
	popularity: number;
	wonOscar: boolean;
	wonEmmy: boolean;
}

const ContactCard: React.FC<ContactCardProps> = React.memo(
	({ name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
		return (
			<div className="contact-card p-4 border rounded-lg shadow-lg text-center text-gray-600">
				<div className="w-24 h-24 mx-auto mb-4">
					<Image
						src={pictureUrl}
						alt={name}
						width={78}
						height={78}
						className="rounded-full"
					/>
				</div>
				<p className="name text-xl font-semibold mb-2">{name}</p>
				<p className="popularity">Popularity: {popularity.toFixed(2)}</p>
				<p className="oscar">
					Oscar Winner: {wonOscar ? <span aria-label="trophy emoji">🏆</span> : "No"}
				</p>
				<p className="emmy">
					Emmy Winner: {wonEmmy ? <span aria-label="trophy emoji">🏆</span> : "No"}
				</p>
			</div>
		);
	}
);

ContactCard.displayName = "ContactCard";

export default ContactCard;
