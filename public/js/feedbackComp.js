const feedback = {
  template: `<section class="feedback">
	<div class="feedback__wrp container">
		<h2 class="feedback__title visually-hidden">feedback</h2>
		<div class="feedback__quote">
			<img
				class="feedback__quote-img"
				src="./img/quote.png"
				alt="quote"
			/>
			<p class="feedback__quote-text">
				“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
				pulvinar purus condimentum“
			</p>
		</div>
		<ul class="feedback__list">
			<li class="feedback__item">
				<h2 class="feedback__subtitle">
					subscribe
					<span class="feedback__subtitle-regular"
						>for our newletter and promotion</span
					>
				</h2>
			</li>
			<li class="feedback__item">
				<form class="feedback__form" action="#">
					<input
						class="feedback__form-input"
						type="email"
						placeholder="Enter Your Email"
					/>
					<button class="feedback__form-button" type="submit">
						Subscribe
					</button>
				</form>
			</li>
		</ul>
	</div>
</section>`,
};

export default feedback;
