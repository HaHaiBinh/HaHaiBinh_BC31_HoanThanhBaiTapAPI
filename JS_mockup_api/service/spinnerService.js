export let spinnerService = {
    batLoading : () => {
        document.getElementById("loading").style.display = "flex";
    },
    tatLoading : () => {
        document.getElementById("loading").style.display = "none";
    }
}