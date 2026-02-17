export async function confirmAction(swal, options = {}) {

    const result = await swal({
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        ...options
    })

    return result.isConfirmed
}
