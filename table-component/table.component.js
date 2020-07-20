//@ts-nocheck
tableController.$inject = [ "$scope", "$location", "$http" ];

angular.module( "bankAdmin" ).component( "tableCom", {
  controller: tableController,
  controllerAs: "tableController",
  templateUrl: "./table-component/table.component.html",
} );

function tableController ( $scope, $location, $http )
{
  $scope.sc = true;
  $scope.checkDates = function ()
  {
    if ( $scope.date1 == undefined || $scope.date2 == undefined )
    {
      $scope.sc = true;
    } else
    {
      $scope.sc = false;
    }
  };

  $scope.rest = function ()
  {
    $scope.sc = true;
  };
  this.buildDatePicker = ( startInput, endInput ) =>
  {
    const container = document.getElementById( "calendar-container" );
    const minDate = new Date();
    minDate.setHours( 0, 0, 0, 0 );

    this.startPicker = new Pikaday( {
      bound: false,
      container: container,
      field: startInput,
      firstDay: 1,
      theme: "calendar__start-wrapper",
      format: "DD-MM-yyyy",
      minDate: minDate,
      onSelect: () =>
      {
        this.updateStartDate( this.startPicker.getDate() );
      },
    } );

    this.endPicker = new Pikaday( {
      bound: false,
      container: container,
      field: endInput,
      firstDay: 1,
      format: "DD-MM-yyyy",
      theme: "calendar__end-wrapper",
      minDate: minDate,
      onSelect: () =>
      {
        this.updateEndDate( this.endPicker.getDate() );
      },
    } );

    this.endPicker.hide();
    this.bindReset( startInput, endInput );
    this.bindMouseMove( endInput, container );
  };

  this.updateStartDate = ( selectedDate ) =>
  {
    this.startPicker.hide();
    this.endPicker.setMinDate( selectedDate );
    this.endPicker.setStartRange( selectedDate );
    this.endPicker.gotoDate( selectedDate );
    this.setEndRange( selectedDate );
    this.endPicker.show();
  };

  this.updateEndDate = ( selectedDate ) =>
  {
    this.endDate = new Date( selectedDate );
    this.setEndRange( selectedDate );
  };

  this.setEndRange = ( endDate ) =>
  {
    this.endPicker.setEndRange( endDate );
    this.endPicker.draw();
  };

  this.bindReset = ( startInput, endInput ) =>
  {
    const reset = document.getElementById( "calendar-clear" );
    reset.addEventListener( "click", ( event ) =>
    {
      event.preventDefault();

      this.endPicker.setDate( null );
      this.updateEndDate( null );
      endInput.value = null;

      this.startPicker.setDate( null );
      this.updateStartDate( null );
      this.startPicker.gotoDate( new Date() );
      startInput.value = null;

      this.endPicker.hide();
      this.startPicker.show();
    } );
  };

  this.bindMouseMove = ( endInput, container ) =>
  {
    this.target = false;

    document.querySelector( "body" ).addEventListener( "mousemove", ( btn ) =>
    {
      if ( !btn.target.classList.contains( "pika-button" ) )
      {
        if ( this.target === true )
        {
          this.target = false;
          this.setEndRange( this.endPicker.getDate() );
        }
      } else
      {
        this.target = true;
        const pikaBtn = btn.target;
        const pikaDate = new Date(
          pikaBtn.getAttribute( "data-pika-year" ),
          pikaBtn.getAttribute( "data-pika-month" ),
          pikaBtn.getAttribute( "data-pika-day" )
        );
        this.setEndRange( pikaDate );
      }
    } );
  };

  const start = document.getElementById( "calendar-start" );
  const end = document.getElementById( "calendar-end" );

  this.buildDatePicker( start, end );

  $scope.SearchDates = function ()
  {
    $scope.arr = [];
    console.log( $scope.date1 );
    console.log( $scope.date2 );

    let StartD = $scope.date1.split("-");
    let StartDD = StartD[2]+"-"+StartD[1]+"-"+StartD[0];

    let StartDDObj = new Date(StartDD);
    let StartDDObjMil = Date.parse(StartDDObj);

    let EndD = $scope.date2.split("-");
    let EndDD = EndD[2]+"-"+EndD[1]+"-"+EndD[0];

    let EndDDObj = new Date(EndDD);
    let EndDDObjMil = Date.parse(EndDDObj);

    $http.get( "../data.json" ).then( ( response ) =>
    {
      response.data.forEach( ( element ) =>
      {
        let e = element;
        let ed = e.registered.split( "-" );
        let MyModiDate = ed[2]+"-"+ed[1]+"-"+ed[0];
        let Dobj = new Date(MyModiDate);
        let DoMili = Date.parse(Dobj);
        //  upto this json dates



        if (DoMili >= StartDDObjMil && DoMili <= EndDDObjMil)
        {
          $scope.arr.push( element );
        }
      } );

      if ( $scope.arr.length == 0 )
      {
        const obj = {
          balance: "No record",
          age: "No record",
          name: "No record",
          gender: "No record",
          email: "No record",
          phone: "No record",
          registered: "No record",
        };

        $scope.arr.push( obj );
      }

      $scope.tble = {
        opacity: "1",
      };
    } );
  };

  //  Thu Jul 23 2020
  // Fri Jul 31 2020
}
