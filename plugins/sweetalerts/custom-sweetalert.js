//==== Points UpDate buttton Message ==== //
$('.widget-content .warning.confirm').on('click', function () {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Update',
      padding: '2em'
    }).then(function(result) {
      if (result.value) {
        swal(
          'Updated!',
          'Points have been Updated.',
          'success'
        )
      }
    })
})

//==== Document Varification buttton Message ==== //
$('.widget-content .warning.varify').on('click', function () {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Varify',
      padding: '2em'
    }).then(function(result) {
      if (result.value) {
        swal(
          'Varified!',
          'Documents have been Varified.',
          'success'
        )
      }
    })
})


//==== User account status Pending Message ==== //
$('.widget-content .chaining-pending').on('click', function () {
  swal.mixin({
    input: 'text',
    confirmButtonText: 'Submit',
    showCancelButton: true,
    padding: '2em',
  }).queue([
    {
      title: 'Message',
      text: 'State the reason'
    },
  ]).then(function(result) {
    if (result.value) {
      swal({
        title: 'Status : Pending',
        padding: '2em',
        html:
          'Your Message: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Submit'
      })
    }
  })
})
//==== User account status Rejected Message ==== //
$('.widget-content .chaining-reject').on('click', function () {
  swal.mixin({
    input: 'text',
    confirmButtonText: 'Submit',
    showCancelButton: true,
    padding: '2em',
  }).queue([
    {
      title: 'Message',
      text: 'State the reason'
    },
  ]).then(function(result) {
    if (result.value) {
      swal({
        title: 'Status : Rejected',
        padding: '2em',
        html:
          'Your Message: <pre>' +
            JSON.stringify(result.value) +
          '</pre>',
        confirmButtonText: 'Submit'
      })
    }
  })
})

//==== Document Submition buttton Message ==== //
$('.widget-content .warning.submit').on('click', function () {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      padding: '2em'
    }).then(function(result) {
      if (result.value) {
        swal(
          'Submited!',
          'Documents have been Submited.',
          'success'
        )
      }
    })
})
