const index = {{ui.damageTable.deletedRow.index}};
const items = [...{{state.damage}}];
items.splice(0, 1);
return items;
