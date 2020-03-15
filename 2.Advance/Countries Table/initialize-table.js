function initializeTable() {

    $('#createLink').on('click', addCountry);

    fixLinks();

    function addCountry() {  //вземаме ст-те на country and capital

        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        if (capital !== '' && country !== '') {
            createCountry(country, capital);
        }
    }

        function createCountry(country, capital) {

            let table = $('#countriesTable');
            let row = $('<tr>');
            let countryAndCapital = $(`<td>${country}</td>
                                       <td>${capital}</td>`);
            row.append(countryAndCapital);
            let actions = $('<td>')
                          .append($('<a href="#">[Up]</a>').click(moveUp))
                          .append($('<a href="#">[Down]</a>').click(moveDown))
                          .append($('<a href="#">[Delete]</a>').click(deleteRow));

            row.append(countryAndCapital);
            row.append(actions);
            table.append(row);
        }

        function moveUp() {
            let currentRow = $(this).parent().parent();
            currentRow.insertBefore(currentRow.prev());

            fixLinks();
        }

        function deleteRow() {
            let currentRow = $(this).parent().parent();
            currentRow.remove();

            fixLinks();
        }

        function moveDown() {
            let currentRow = $(this).parent().parent();
            currentRow.insertAfter(currentRow.next());

            fixLinks();
        }

        function fixLinks() {

        $('a').show();
        $('#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child').hide(); //вземаме 3-и ред и на 3-та клетка 1-во полe
        $('#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)').hide();

        }

        createCountry('Bulgaria', 'Sofia');
        createCountry('USA', 'Washington');
        createCountry('France', 'Paris');

}
