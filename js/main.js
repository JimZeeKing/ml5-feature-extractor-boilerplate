function generateLabelField(id, label) {
    let field = crel('div', "",
        crel('label', { for: "label1" }, "Label : " + label,
            crel('input', { id: id, type: 'text' })
        ),
    );


    document.querySelector(".labels").appendChild(field);

};

document.addEventListener("DOMContentLoaded", function (argument) {
    generateLabelField("label1", " 1 ");
    generateLabelField("label2", " 2 ");

});

