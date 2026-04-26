package com.myprojecy.alpine;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.Route;

@Route("/")
public class demoLayout extends HorizontalLayout {
	private static final long serialVersionUID = 2941347691437351255L;
	private static int i = 0;

	public demoLayout() {
		Button button = new Button("Press me !");
		button.addSingleClickListener(e -> {
			System.out.println("Pressed button: " + (i++));
		});
		add(button);
	}
}
