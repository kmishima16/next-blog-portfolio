"use client";

import { useState, useEffect, useCallback } from "react";
import type { Shadow } from "../types";
import styles from "./ControlBox.module.css";

interface ControlBoxProps {
	id: number;
	initialShadow: Shadow;
	updateParentShadow: (id: number, shadow: Shadow) => void;
}

const ControlBox: React.FC<ControlBoxProps> = ({
	id,
	initialShadow,
	updateParentShadow,
}) => {
	const [shadowModel, setShadowModel] = useState<Shadow>(initialShadow);

	const updateShadowModel = useCallback(
		(propName: keyof Shadow, value: number | string | boolean) => {
			setShadowModel((prevModel) => ({
				...prevModel,
				[propName]: value,
			}));
		},
		[],
	);

	useEffect(() => {
		updateParentShadow(id, shadowModel);
	}, [id, shadowModel, updateParentShadow]);

	const renderSlider = (
		label: string,
		propName: keyof Shadow,
		min: number,
		max: number,
		step: number,
	) => {
		const inputId = `slider-${propName}-${id}`;
		return (
			<div className={styles.sliderGroup}>
				<label htmlFor={inputId} className={styles.sliderLabel}>
					{label} ({shadowModel[propName]}px)
				</label>
				<input
					id={inputId}
					type="range"
					min={min}
					max={max}
					step={step}
					value={shadowModel[propName] as number}
					onChange={(e) => updateShadowModel(propName, Number(e.target.value))}
					className={styles.slider}
				/>
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>シャドウレイヤー {id + 1}</h3>

			{renderSlider("Offset X", "offsetX", -100, 100, 1)}
			{renderSlider("Offset Y", "offsetY", -100, 100, 1)}
			{renderSlider("Blur", "blur", 0, 100, 1)}
			{renderSlider("Spread", "spread", -50, 50, 1)}

			<div className={styles.bottomControls}>
				<div className={styles.colorControl}>
					<label htmlFor={`color-${id}`} className={styles.colorLabel}>
						Color
					</label>
					<input
						id={`color-${id}`}
						type="color"
						value={shadowModel.color}
						onChange={(e) => updateShadowModel("color", e.target.value)}
						className={styles.colorPicker}
					/>
				</div>

				<div className={styles.insetControl}>
					<label htmlFor={`inset-${id}`} className={styles.insetLabel}>
						Inset:
					</label>
					<input
						id={`inset-${id}`}
						type="checkbox"
						checked={shadowModel.inset}
						onChange={(e) => updateShadowModel("inset", e.target.checked)}
						className={styles.checkbox}
					/>
				</div>
			</div>
		</div>
	);
};

export default ControlBox;
