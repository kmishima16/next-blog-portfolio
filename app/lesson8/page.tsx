"use client";

import { useState, useCallback } from "react";
import { PlusIcon, MinusIcon } from "./components/Icons";
import ControlBox from "./components/ControlBox";
import { formatShadowCss } from "./utils/shadowUtils";
import type { Shadow } from "./types";
import styles from "./page.module.css";

const defaultShadow: Shadow = {
	offsetX: 0,
	offsetY: 0,
	blur: 15,
	spread: 0,
	color: "#8a902c",
	inset: false,
};

export default function Lesson8() {
	const [shadows, setShadows] = useState<Shadow[]>([defaultShadow]);

	const updateShadow = useCallback((id: number, newProps: Shadow) => {
		setShadows((prevShadows) =>
			prevShadows.map((shadow, index) => (index === id ? newProps : shadow)),
		);
	}, []);

	const addShadow = () => {
		const newShadow: Shadow =
			shadows.length > 0
				? {
						...shadows[shadows.length - 1],
						color:
							"#" +
							Math.floor(Math.random() * 16777215)
								.toString(16)
								.padStart(6, "0"),
					}
				: defaultShadow;

		setShadows((prevShadows) => [...prevShadows, newShadow]);
	};

	const removeLastLayer = () => {
		if (shadows.length > 1) {
			setShadows((prevShadows) => prevShadows.slice(0, -1));
		}
	};

	const boxShadowCss = shadows.map(formatShadowCss).join(", ");

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>Box Shadow Generator</h1>
				<p className={styles.subtitle}>
					複数のレイヤーを調整して、独自の複雑なボックスシャドウを作成
				</p>
			</header>

			<div className={styles.mainGrid}>
				<div className={styles.previewArea}>
					<div className={styles.previewBox}>
						<div
							className={styles.previewElement}
							style={{ boxShadow: boxShadowCss }}
						/>
					</div>

					<div className={styles.controlButtons}>
						<button
							type="button"
							onClick={addShadow}
							className={styles.addButton}
						>
							<PlusIcon className={styles.icon} />
							ADD LAYER
						</button>
						<button
							type="button"
							onClick={removeLastLayer}
							disabled={shadows.length <= 1}
							className={`${styles.undoButton} ${shadows.length <= 1 ? styles.disabled : ""}`}
						>
							<MinusIcon className={styles.icon} />
							REMOVE LAST LAYER
						</button>
					</div>

					<div className={styles.cssOutput}>
						<h3 className={styles.cssTitle}>CSS Output:</h3>
						<code className={styles.cssCode}>box-shadow: {boxShadowCss}</code>
					</div>
				</div>

				<div className={styles.controlArea}>
					{shadows.map((shadow, index) => (
						<ControlBox
							key={`shadow-${index}-${shadow.color}`}
							id={index}
							initialShadow={shadow}
							updateParentShadow={updateShadow}
						/>
					))}
				</div>
			</div>

			<footer className={styles.footer}>
				<p>
					※
					ControlBoxは、初期値として親から渡されたシャドウデータ(initialShadow)でローカル状態(shadowModel)を初期化し、
					変更のたびに親(App)のupdateShadow関数を呼び出して全体の状態を更新します。
				</p>
			</footer>
		</div>
	);
}
