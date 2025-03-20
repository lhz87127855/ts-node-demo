console.log(0);

function local() {
  console.log(1);
  try {
    console.log(2);
    return;
  } catch (e) {
  } finally {
    console.log(3);
  }
}

local();
