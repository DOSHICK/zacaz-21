new Litepicker({
  element: document.getElementById('select-periodStart-new'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  }
})

new Litepicker({
  element: document.getElementById('select-periodEnd-new'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  }
})

new Litepicker({
  element: document.getElementById('select-periodStart-old'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  }
})

new Litepicker({
  element: document.getElementById('select-periodEnd-old'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  }
})