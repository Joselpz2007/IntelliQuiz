function checkAnswer(button, isCorrect) {
    // Desactivar todos los botones de la pregunta actual
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // Colorear el botón seleccionado
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
}