//esc

$(document).keyup(e => {
  if (e.keyCode === 27) $('.popup-header').click(); //esc key
});


//data

const hardwareData = [
  {
    model: 'Existing hardware',
    deployment : 'Feb 14 2018',
    nodes : '<p> 3 nodes </p>',
    cpu:  '<p> 50.4 Ghz </p>',
    memory:  '<p> 768 GiB </p>',
    storage: '<p> 14.58 TiB </p>',
    coins:  '<p> 1200 Coins </p>',
    actions: `<p><a href=''>Edit</a> · <a href=''> Delete</a></p>`,
  },
  {
    model: 'Existing hardware',
    deployment : 'Feb 14 2018',
    nodes : '<p> 3 nodes </p>',
    cpu:  '<p> 50.4 Ghz </p>',
    memory:  '<p> 768 GiB </p>',
    storage: '<p> 14.58 TiB </p>',
    coins:  '<p> 1200 Coins </p>',
    actions: `<p><a href=''>Edit</a> · <a href=''> Delete</a></p>`,
  },
  {
    model: 'Existing hardware',
    deployment : 'Feb 14 2018',
    nodes : '<p> 3 nodes </p>',
    cpu:  '<p> 50.4 Ghz </p>',
    memory:  '<p> 768 GiB </p>',
    storage: '<p> 14.58 TiB </p>',
    coins:  '<p> 1200 Coins </p>',
    actions: `<p><a href=''>Edit</a> · <a href=''> Delete</a></p>`,
  },
  {
    model: 'Existing hardware',
    deployment : 'Feb 14 2018',
    nodes : '<p> 3 nodes </p>',
    cpu:  '<p> 50.4 Ghz </p>',
    memory:  '<p> 768 GiB </p>',
    storage: '<p> 14.58 TiB </p>',
    coins:  '<p> 1200 Coins </p>',
    actions: `<p><a href=''>Edit</a> · <a href=''> Delete</a></p>`,
  }
]

$('.table').append(
  hardwareData.map( resource =>
    `<tr>
      <td><input type="checkbox"></td>
      <td>${resource.model}</td>
      <td>${resource.deployment}</td>
      <td>${resource.nodes}</td>
      <td>${resource.cpu}</td>
      <td>${resource.memory}</td>
      <td>${resource.storage}</td>
      <td>${resource.coins}</td>
      <td>${resource.actions}</td>
    </tr>`
  )
)
