import type { Shadow } from "../types";

export const formatShadowCss = (shadow: Shadow): string => {
	const { offsetX, offsetY, blur, spread, color, inset } = shadow;
	const insetString = inset ? "inset " : "";

	return `${insetString}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
};
