use neon::prelude::*;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
	let name_handle: Handle<JsString> = cx.argument(0)?;
	let name = name_handle.value(&mut cx);

	Ok(cx.string(format!("hello {}", name)))
}

fn merge(mut cx: FunctionContext) -> JsResult<JsObject> {
	let result: Handle<JsObject> = cx.empty_object();
	let origin_handle: Handle<JsString> = cx.argument(0)?;
	let current_handle: Handle<JsString> = cx.argument(1)?;
	let remote_handle: Handle<JsString> = cx.argument(2)?;
	let origin = origin_handle.value(&mut cx);
	let current = current_handle.value(&mut cx);
	let remote = remote_handle.value(&mut cx);
	let merge_result = diffy::merge(&origin, &current, &remote);

	match merge_result {
		Ok(value) => {
			let success = cx.boolean(true);
			let value = cx.string(value);
			result.set(&mut cx, "success", success)?;
			result.set(&mut cx, "value", value)?;
		}
		_ => {
			let success = cx.boolean(false);
			let value = cx.string(origin);
			result.set(&mut cx, "success", success)?;
			result.set(&mut cx, "value", value)?;
		}
	};

	Ok(result)
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
	cx.export_function("hello", hello)?;
	cx.export_function("merge", merge)?;
	Ok(())
}
