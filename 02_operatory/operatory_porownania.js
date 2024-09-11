{
    console.log('== lub != ⇒ porównuje wartości bez porównania typów');
    let a = 10;
    let b = 10;
    console.log(a + ' == ' + b + " ⇒", a == b);
    console.log(a + ' != ' + b + " ⇒", a != b);
    console.log('');
}
{
    console.log('=== lub !== ⇒ porównuje wartości i ich typ');
    let a = 50;
    let b = '50';
    console.log(a + ' === ' + b + " ⇒", a === b);
    console.log(a + ' !== ' + b + " ⇒", a !== b);
    console.log('');
}
{
    console.log('< lub > ⇒ mniejsze lub większe');
    let a = 10;
    let b = 20;
    console.log(a + ' < ' + b + " ⇒", a < b);
    console.log(a + ' < ' + b + " ⇒", b < a);
    console.log(a + ' > ' + b + " ⇒", a > b);
    console.log('');
}
{
    console.log('<= lub >= ⇒ mniejsze-równe i większe-równe');
    let a = 10;
    let b = 20;
    let c = 10;
    console.log(a + ' ≤ ' + b + " ⇒", a <= b);
    console.log(a + ' ≥ ' + c + " ⇒", a >= c);
    console.log('');
}