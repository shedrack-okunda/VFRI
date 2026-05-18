import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { CONTACT } from "../../data/content";
import axios from "axios";

const ENQUIRY_TYPES = [
	"Research Collaboration",
	"Training / Workshop",
	"Consultancy",
	"Partnership / Funding",
	"Media Enquiry",
	"General Information",
];

function ContactItem({ label, children }) {
	return (
		<div className="flex gap-4 items-start">
			<div className="w-10 h-10 flex-shrink-0 rounded-full border border-gold/30 flex items-center justify-center text-gold text-sm">
				{label === "Harare"
					? "🏛️"
					: label === "Nairobi"
						? "📍"
						: label === "Email"
							? "✉️"
							: "🌐"}
			</div>
			<div>{children}</div>
		</div>
	);
}

export default function Contact() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		organisation: "",
		enquiryType: "",
		message: "",
	});
	const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

	const handleChange = (e) =>
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		try {
			await axios.post("/api/contact", form);
			setStatus("success");
			setForm({
				firstName: "",
				lastName: "",
				email: "",
				organisation: "",
				enquiryType: "",
				message: "",
			});
		} catch {
			setStatus("error");
		}
		setTimeout(() => setStatus(null), 4000);
	};

	const inputCls = `w-full bg-white/6 border border-white/15 rounded-sm px-4 py-3
    text-white text-sm font-sans placeholder:text-white/25
    focus:outline-none focus:border-gold focus:bg-gold/5 transition-colors duration-200`;

	return (
		<section
			id="contact"
			className="py-24 px-8 md:px-16 lg:px-20 bg-crimson-deep grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
			{/* Info */}
			<div ref={leftRef} className="reveal">
				<span
					className="section-label mb-4 block"
					style={{ color: "#c8a84b" }}>
					Get In Touch
				</span>
				<h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
					Contact VFRI
				</h2>
				<p className="text-white/60 text-sm leading-[1.85] mb-10">
					We welcome partnerships, research collaborations, media
					enquiries, and institutional engagement. Reach us through
					either of our offices.
				</p>

				<div className="flex flex-col gap-6">
					<ContactItem label="Harare">
						<p className="text-gold text-[0.65rem] tracking-[0.15em] uppercase mb-1">
							{CONTACT.harare.label}
						</p>
						<p className="text-white/75 text-sm leading-relaxed">
							{CONTACT.harare.address}
						</p>
						<p className="text-white/55 text-xs mt-1">
							{CONTACT.harare.phone}
						</p>
					</ContactItem>
					<ContactItem label="Nairobi">
						<p className="text-gold text-[0.65rem] tracking-[0.15em] uppercase mb-1">
							{CONTACT.nairobi.label}
						</p>
						<p className="text-white/75 text-sm leading-relaxed">
							{CONTACT.nairobi.address}
						</p>
						<p className="text-white/55 text-xs mt-1">
							{CONTACT.nairobi.phone}
						</p>
					</ContactItem>
					<ContactItem label="Email">
						<p className="text-gold text-[0.65rem] tracking-[0.15em] uppercase mb-1">
							Email
						</p>
						<a
							href={`mailto:${CONTACT.email}`}
							className="text-white/75 text-sm hover:text-gold transition-colors">
							{CONTACT.email}
						</a>
					</ContactItem>
					<ContactItem label="Website">
						<p className="text-gold text-[0.65rem] tracking-[0.15em] uppercase mb-1">
							Website
						</p>
						<a
							href={`https://${CONTACT.website}`}
							target="_blank"
							rel="noreferrer"
							className="text-white/75 text-sm hover:text-gold transition-colors">
							{CONTACT.website}
						</a>
					</ContactItem>
				</div>
			</div>

			{/* Form */}
			<div ref={rightRef} className="reveal">
				<h3 className="font-display text-2xl font-light text-white mb-7">
					Send a Message
				</h3>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
								First Name
							</label>
							<input
								name="firstName"
								value={form.firstName}
								onChange={handleChange}
								placeholder="First name"
								required
								className={inputCls}
							/>
						</div>
						<div>
							<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
								Last Name
							</label>
							<input
								name="lastName"
								value={form.lastName}
								onChange={handleChange}
								placeholder="Last name"
								required
								className={inputCls}
							/>
						</div>
					</div>

					<div>
						<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
							Email Address
						</label>
						<input
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							placeholder="your@email.com"
							required
							className={inputCls}
						/>
					</div>

					<div>
						<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
							Organisation
						</label>
						<input
							name="organisation"
							value={form.organisation}
							onChange={handleChange}
							placeholder="University, NGO, Government body..."
							className={inputCls}
						/>
					</div>

					<div>
						<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
							Nature of Enquiry
						</label>
						<select
							name="enquiryType"
							value={form.enquiryType}
							onChange={handleChange}
							required
							className={`${inputCls} [&>option]:bg-green-deep`}>
							<option value="">Select an option</option>
							{ENQUIRY_TYPES.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>

					<div>
						<label className="block text-white/50 text-[0.75rem] tracking-widest uppercase mb-1.5">
							Message
						</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Tell us about your enquiry or interest in VFRI..."
							required
							rows={5}
							className={`${inputCls} resize-none`}
						/>
					</div>

					<button
						type="submit"
						disabled={status === "sending"}
						className={`btn-primary w-full text-center mt-2 transition-all
              ${status === "success" ? "!bg-crimson-mid !text-white" : ""}
              ${status === "error" ? "!bg-rust !text-white" : ""}
              ${status === "sending" ? "opacity-60 cursor-not-allowed" : ""}`}>
						{status === "sending"
							? "Sending…"
							: status === "success"
								? "Message Sent ✓"
								: status === "error"
									? "Error — Try Again"
									: "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
}
