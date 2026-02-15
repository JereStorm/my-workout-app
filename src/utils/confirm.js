export async function confirmAction(swal, options = {}) {

    const result = await swal({
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        ...options
    })

    return result.isConfirmed
}
