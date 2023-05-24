import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({
	children,
	asChild,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={clsx(
				"w-full rounded bg-yellow-300 py-3 px-4 text-sm font-semibold text-black-900 ring-black-900 transition-colors hover:bg-yellow-500 hover:text-black-900 focus:ring-2",
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}