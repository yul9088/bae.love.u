const snowfallContainer = document.getElementById('snowfall');
const NUM_SNOWFLAKES = 50;
const MIN_DURATION = 5;
const MAX_DURATION = 15;

for (let i = 0; i < NUM_SNOWFLAKES; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Random horizontal position
  snowflake.style.left = Math.random() * 100 + 'vw';

  // Random falling duration
  const fallDuration = Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
  snowflake.style.animationDuration = fallDuration + 's';

  // Random size
  const size = Math.random() * 10 + 5; // 5px - 15px
  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';

  snowfallContainer.appendChild(snowflake);
}
