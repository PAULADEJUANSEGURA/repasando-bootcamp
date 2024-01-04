function App(){
    const viewState = React.useState('login');
    const view = viewState[0];
    const setView = viewState[1];
    
    const handleRegisterClick = () => setView('register');

    if (view === 'login'){
        return <Login onRegisterClick={handleRegisterClick} />
    } else if (view === 'register'){
        return <Register />
    } else if (view === 'home'){
        return <Home />
    } 
}