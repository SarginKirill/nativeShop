const body = document.getElementById('card-body');

function createProductCard(product) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('w-full', 'mb-12', 'md:w-calc-1');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add(
    'rounded',
    'border',
    'w-full',
    'aspect-video',
    'md:aspect-square',
    'p-3',
    'border-black',
    'bg-no-repeat',
    'bg-center'
  );
  imageContainer.style.backgroundImage = `url(${product.images[0].src})`;
  imageContainer.style.backgroundSize = 'cover';
  imageContainer.style.backgroundPosition = '50% 50%';

  const label = document.createElement('div');
  label.classList.add('bg-black', 'p-2', 'rounded', 'inline-block', 'text-xs');
  const labelText = document.createElement('p');
  labelText.classList.add('uppercase', 'text-white');
  labelText.textContent = 'used';
  label.appendChild(labelText);

  imageContainer.appendChild(label);

  cardContainer.appendChild(imageContainer);

  const textLine = document.createElement('div');
  textLine.classList.add('flex', 'justify-between', 'mt-3');

  const textLeft = document.createElement('div');
  textLeft.classList.add('text-sm', 'font-bold');
  const productTitle = document.createElement('p');
  productTitle.textContent = product.title;
  const productCost = document.createElement('p');
  productCost.textContent = product.variants[0].price;
  textLeft.appendChild(productTitle);
  textLeft.appendChild(productCost);

  textLine.appendChild(textLeft);

  const textRight = document.createElement('div');
  textRight.classList.add('flex', 'flex-col', 'items-end', 'text-sm');

  const condition = document.createElement('p');
  condition.classList.add('font-medium');
  condition.textContent = 'Condition';
  textRight.appendChild(condition);

  const conditionDescription = document.createElement('p');
  conditionDescription.classList.add('text-end');
  conditionDescription.textContent = product.vendor;

  textRight.appendChild(conditionDescription);

  textLine.appendChild(textRight);

  cardContainer.appendChild(textLine);

  return cardContainer;
}

fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
  .then((res) => res.json())
  .then((data) => {
    console.log('DATA', data);
    data.products.forEach((product) => {
      const card = createProductCard(product);
      body.appendChild(card);
    });
  })
  .catch((e) => console.log('Error', e));
