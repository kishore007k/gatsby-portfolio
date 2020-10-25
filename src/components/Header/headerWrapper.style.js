import styled from "styled-components";

const HeaderWrapper = styled.div`
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	min-height: 8vh;
	background-color: rgba(31, 30, 30, 0.24);
	transition: 0.3s ease background-color;

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		max-width: 1140px;
		padding: 0 10px;
		margin: auto;
	}

	.navItems {
		list-style: none;
		position: absolute;
		background-color: rgb(31, 30, 30);
		width: 100vw;
		height: 100vh;
		left: 100%;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		overflow-x: hidden;
		transition: 0.5s ease left;

		a {
			font-size: 30px;
			font-weight: 500;
			letter-spacing: 0.2rem;
			text-decoration: none;
			color: white;
			text-transform: uppercase;
			padding: 20px;
			display: block;

			&::after {
				content: attr(data-after);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) scale(0);
				color: rgba(240, 248, 255, 0.021);
				font-size: 70px;
				letter-spacing: 50px;
				z-index: -1;
				transition: 0.3s ease letter-spacing;
			}
		}

		li:hover {
			a {
				color: crimson;

				&::after {
					transform: translate(-50%, -50%) scale(1);
					letter-spacing: initial;
				}
			}
		}
	}

	.navItems-mobile {
		list-style: none;
		position: absolute;
		background-color: rgb(31, 30, 30);
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		overflow-x: hidden;
		transition: 0.5s ease left;

		a {
			font-size: 30px;
			font-weight: 500;
			letter-spacing: 0.2rem;
			text-decoration: none;
			color: white;
			text-transform: uppercase;
			padding: 20px;
			display: block;

			&::after {
				content: attr(data-after);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) scale(0);
				color: rgba(240, 248, 255, 0.021);
				font-size: 70px;
				letter-spacing: 50px;
				z-index: -1;
				transition: 0.3s ease letter-spacing;
			}
		}

		li:hover {
			a {
				color: crimson;

				&::after {
					transform: translate(-50%, -50%) scale(1);
					letter-spacing: initial;
				}
			}
		}
	}

	.burger {
		height: 60px;
		width: 60px;
		display: inline-block;
		border: 3px solid crimson;
		border-radius: 50%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		top: 10px;
		cursor: pointer;
		transform: scale(0.8);
		margin-right: 10px;

		&::after {
			position: absolute;
			content: "";
			height: 100%;
			width: 100%;
			border-radius: 50%;
			border: 3px solid crimson;
			animation: burger_puls 1s ease infinite;
		}
	}

	@keyframes burger_puls {
		0% {
			opacity: 1;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.4);
		}
	}

	.bar {
		height: 2px;
		width: 30px;
		position: relative;
		background-color: crimson;
		z-index: -1;

		&::after {
			top: 8px;
		}

		&::before {
			bottom: 8px;
		}

		&::after,
		&::before {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			background-color: crimson;
			transition: 0.3s ease;
			transition-property: top, bottom;
		}
	}

	.burger-open {
		height: 60px;
		width: 60px;
		display: inline-block;
		border: 3px solid crimson;
		border-radius: 50%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		top: 10px;
		cursor: pointer;
		transform: scale(0.8);
		margin-right: 10px;

		&::after {
			position: absolute;
			content: "";
			height: 100%;
			width: 100%;
			border-radius: 50%;
			border: 3px solid crimson;
			animation: burger_puls 1s ease infinite;
		}
		.bar-open {
			height: 2px;
		width: 30px;
		position: relative;
		background-color: crimson;
		z-index: -1;

		&::after {
			top: 0px;
		}

		&::before {
			bottom: 0px;
		}

		&::after,
		&::before {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			background-color: crimson;
			transition: 0.3s ease;
			transition-property: top, bottom;
		}
	}

	@media screen and (min-width: 1200px){
		.burger {
			display: none;
		}

		.navItems {
			position: initial;
			display: block;
			height: auto;
			width: fit-content;
			background-color: transparent;

			li {
        display: inline-block;

				a{
					font-size: 1.8rem;

					&::after {
						display: none;
					}
				}
			}
		}
	}
`;

export default HeaderWrapper;
