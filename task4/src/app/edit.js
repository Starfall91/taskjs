define([
    'jQuery',
    'model/context',
    'action/save',
    'action/delete'
], function ($, context, saveAction, deleteAction) {

    return function () {
        let ticket = context.getContext();
        let title = $('#title');
        let description = $('#description');
        let assigned = $('#assigned');
        let status = $('#status');

        saveAction = saveAction(ticket ? ticket.id : null);

        $('#profile').submit(function (event) {
            event.preventDefault();

            let ticket = {title: title.val(), description: description.val(), assigned: assigned.val(), status: status.val()}
            saveAction(ticket);

            let deleteButton = $('#delete').click(deleteAction(ticket ? ticket.id : null));

            if (!ticket) {
                deleteButton.text('Cancel');
            } else {
                title.val(ticket.title);
                description.val(ticket.description);
                assigned.val(ticket.assigned);
                status.val(ticket.status);
            }
        });
    }
});
