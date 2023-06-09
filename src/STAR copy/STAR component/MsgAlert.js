function showAlert(ifUpdated, msg, redirectUrl, delay) {
    this.setState({
        showMsgAlert: true,
        ifUpdated: ifUpdated,
        msg: msg,
    });
    if (redirectUrl) {
        setTimeout(() => {
            window.location.href = redirectUrl
        }, Number(delay) || 2000);
    }
}