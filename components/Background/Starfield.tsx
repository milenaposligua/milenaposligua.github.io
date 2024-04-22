'use client';

import React, { useEffect } from 'react';

interface Props {
	speedFactor?: number;
	backgroundColor?: string;
	starColor?: string;
	starCount?: number;
}

export default function Starfield(props: Props) {
	const { speedFactor = 0.05, backgroundColor = 'transparent', starColor = 'var(--red-accent)', starCount = 5000 } = props;

	useEffect(() => {
		const canvas = document.getElementById('starfield') as HTMLCanvasElement;

		if (canvas) {
			const c = canvas.getContext('2d');

			if (c) {
				let w = window.innerWidth;
				let h = window.innerHeight;

				const setCanvasExtents = () => {
					canvas.width = w;
					canvas.height = h;
				};

				setCanvasExtents();

				window.onresize = () => {
					setCanvasExtents();
				};

				const makeStars = (count: number) => {
					const out = [];
					for (let i = 0; i < count; i++) {
						const s = {
							x: Math.random() * 1600 - 800,
							y: Math.random() * 900 - 450,
							z: Math.random() * 1000,
						};
						out.push(s);
					}
					return out;
				};

				let stars = makeStars(starCount);

				const clear = () => {
					c.fillStyle = backgroundColor;
					c.fillRect(0, 0, canvas.width, canvas.height);
				};

				const putPixel = (x: number, y: number, brightness: number) => {
					const size = 2;
					const starColorRGB = getComputedStyle(document.documentElement).getPropertyValue('--red-accent');
					const color= hexToRGB(starColorRGB);
					const rgb = 'rgba(' + color + ',' + brightness + ')';
					c.fillStyle = rgb;
					c.beginPath();
					c.arc(x, y, size, 0, 2 * Math.PI, false);
					c.fill();
			};

				const moveStars = (distance: number) => {
					const count = stars.length;
					for (var i = 0; i < count; i++) {
						const s = stars[i];
						s.z -= distance;
						while (s.z <= 1) {
							s.z += 1000;
						}
					}
				};

				let prevTime: number;
				const init = (time: number) => {
					prevTime = time;
					requestAnimationFrame(tick);
				};

				const tick = (time: number) => {
					let elapsed = time - prevTime;
					prevTime = time;

					moveStars(elapsed * speedFactor);

					clear();

					const cx = w / 2;
					const cy = h / 2;

					const count = stars.length;
					for (var i = 0; i < count; i++) {
						const star = stars[i];

						const x = cx + star.x / (star.z * 0.001);
						const y = cy + star.y / (star.z * 0.001);

						if (x < 0 || x >= w || y < 0 || y >= h) {
							continue;
						}

						const d = star.z / 1000.0;
						const b = 1 - d * d;

						putPixel(x, y, b);
					}

					requestAnimationFrame(tick);
				};

				requestAnimationFrame(init);

				// add window resize listener:
				window.addEventListener('resize', function () {
					w = window.innerWidth;
					h = window.innerHeight;
					setCanvasExtents();
				});
			} else {
				console.error('Could not get 2d context from canvas element');
			}
		} else {
			console.error('Could not find canvas element with id "starfield"');
		}

		return () => {
			window.onresize = null;
		};
	}, [starColor, backgroundColor, speedFactor, starCount]);

	function hexToRGB(gex: string): [number, number, number] | null {
		const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		const hex = gex.replace(shorthandRegex, function (m, r, g, b) {
			return r + r + g + g + b + b;
		});

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			return [
				parseInt(result[1], 16),
				parseInt(result[2], 16),
				parseInt(result[3], 16),
			];
		} else {
			return null;
		}
	}

	return (
		<canvas
			id="starfield"
			style={{
				padding: 0,
				margin: 0,
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100%',
				zIndex: -2,
				opacity: 1,
				pointerEvents: 'none',
				mixBlendMode: 'screen',
			}}
		></canvas>
	);
}