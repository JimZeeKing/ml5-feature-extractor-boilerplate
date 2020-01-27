function generateLabelField(id, label, option) {
    let input;
    let field = crel('div', "",
        crel('label', { for: "label1" }, "Label : " + label,
            input = crel('input', {
                id: id, type: 'text'
            })
        ),
    );

    input.addEventListener("input", function (e) {
        option.value = option.innerText = input.value;
    });

    document.querySelector(".labels").appendChild(field);

};

document.addEventListener("DOMContentLoaded", function (argument) {
    generateLabelField("label1", " 1 ", document.querySelector('.currentLabel').options[0]);
    generateLabelField("label2", " 2 ", document.querySelector('.currentLabel').options[1]);

});

